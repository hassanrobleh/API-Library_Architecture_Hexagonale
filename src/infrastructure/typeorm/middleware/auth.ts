import jwt from 'jsonwebtoken'

export const auth = (req, res, next) => {
    const authorizationHeader = req.headers.authorization

    if (!authorizationHeader) {
        const message = `Vous n'avez pas fourni de jeton d'authentification. Ajoutez-en un dans l'en-tête de la requête.`
        
    }

    const token = authorizationHeader.split(' ')[1]

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (error, decodedToken) => {
        if(error) {
            const message = `L'utilisateur n'est pas autorisé à accèder à cette ressource.`
            return res.status(401).json({ message, data: error })
        }

        const userId = decodedToken.id
        if (req.body.id && req.body.id !== userId) {
            const message = `L'identifiant de l'utilisateur est invalide.`
            res.status(401).json({ message })
        } else {
            next()
        }
    })
}
