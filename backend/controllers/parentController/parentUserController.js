import ParentUser from "../../models/parentModels/parentLogin.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const parentUserLogin = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await ParentUser.findOne({ email });
        if (!user) return res.status(404).json({ success: false, message: "User not found" });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ success: false, message: "Invalid credentials" });

        const token = jwt.sign({ userId: user._id }, process.env.SECRET, {
            expiresIn: '12h'
        });

        res.cookie('token', token, { httpOnly: true, secure: true, sameSite: 'none' });
        return res.status(200).json({ success: true, message: "Parent user login successfully", token: token });
    } catch (error) {
        console.log("Parent user login error", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
}

const parentRegisterUser = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const exists = await ParentUser.findOne({ email });
        if (exists) return res.status(400).json({ success: false, message: "User already exists" });

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new ParentUser({
            name,
            email,
            password: hashedPassword 
        });

        const user = await newUser.save();
        const token = jwt.sign({ userId: user._id }, process.env.SECRET, {
            expiresIn: '12h'
        });
        res.cookie('token', token, { httpOnly: true, secure: true, sameSite: 'none' });


        return res.status(200).json({ success: true, message: "Registered successfully", token: token });
    } catch (error) {
        console.log('Registration error: ', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
}

export { parentUserLogin, parentRegisterUser };
