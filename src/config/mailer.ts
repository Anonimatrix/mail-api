const credentials = {
    service: 'gmail',
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
    }
}

export const defaultConfig = {
    from: 'Me<tavelliezequiel@gmail.com>',
    to: process.env.EMAIL_TO || ''
}

export const sendConfig = {
    key: process.env.SECRET_KEY || '',
}

export default credentials;