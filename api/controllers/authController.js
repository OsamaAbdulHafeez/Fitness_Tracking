import { ALREADYEXISTS, BADREQUEST, CREATED, FORBIDDEN, INTERNALERROR, NOTFOUND, OK } from "../constants/httpStatus.js"
import UserSchema from '../modal/usermodal.js'
import { responseMessages } from "../constants/responseMessages.js"
import { compareSync, genSaltSync, hashSync } from "bcrypt"
import { GenerateToken } from "../utils/token.js"

export const registerController = async (req, res, next) => {
    try {
        const { firstName, lastName, userName, email, password, confirmPassword, gender } = req.body
        if (!firstName || !lastName || !userName || !email || !confirmPassword || !password || !gender) {
            return res.status(BADREQUEST).send({
                status: false,
                message: responseMessages.MISSING_FIELDS
            })
        }
        if (password !== confirmPassword) {
            return res.status(FORBIDDEN).send({
                status: false,
                message: responseMessages.PASSWORD_AND_CONFIRM_NO_MATCH
            })
        }
        const user = await UserSchema.findOne({ email: email })
        if (user) {
            return res.status(ALREADYEXISTS).send({
                status: false,
                message: responseMessages.USER_EXISTS
            })
        } else {
            const user = await UserSchema.findOne({ userName: userName })
            if (user) {
                return res.status(ALREADYEXISTS).send({
                    status: false,
                    message: responseMessages.USER_NAME_EXISTS
                })
            } else {
                const gensalt = genSaltSync(10)
                let doc;
                if (password?.length > 8) {
                    doc = new UserSchema({
                        firstName,
                        lastName,
                        userName,
                        email,
                        password: hashSync(password, gensalt),
                        gender
                    })
                    const savedUser = await doc.save()
                    if (savedUser.errors) {
                        return res.status(INTERNALERROR).send({
                            status: false,
                            message: errors.message
                        })
                    } else {
                        savedUser.password = undefined;
                        return res.status(CREATED).send({
                            status: true,
                            message: responseMessages.SUCCESS_REGISTRATION,
                            data: savedUser
                        });
                    }
                } else {
                    return res
                        .status(FORBIDDEN)
                        .send({
                            status: false,
                            message: responseMessages.UN_AUTHORIZED
                        });
                }
            }
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }

}

export const loginController = async (req, res, next) => {
    try {
        const { email, password } = req.body

        if (email && password) {
            const user = await UserSchema.findOne({ email: email })
            if (user){
                const isValid = compareSync(password,user.password)
                if(user.email === email && isValid){
                    user.password = undefined
                    const token = GenerateToken({ data: user, expiresIn: '24h' });
                    res.cookie('token', token, { httpOnly: true });
                    res.status(OK).send({
                        status:true,
                        message:responseMessages.LOGIN_SUCCESS,
                        data:user
                    })
                }else{
                    res.status(FORBIDDEN).send({
                        status:false,
                        message:responseMessages.UN_AUTHORIZED
                    })
                }
            }else{
                res.status(NOTFOUND).send({
                    status:false,
                    message:responseMessages.NO_USER_FOUND
                })
            }
        } else {
            res.status(BADREQUEST).send({
                status:false,
                message: responseMessages.MISSING_FIELDS
            })
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}