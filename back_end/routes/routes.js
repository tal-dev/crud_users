const express = require("express")

const router = express.Router()

const signUpTemplate = require("../register")

router.post("/register", async (request, response) => {
    response.send("data has been successfully sent")
    const signUpUser = await signUpTemplate({
        fullname: request.body.fullname,
        username: request.body.username,
        email: request.body.email,
        password: request.body.password,

    })
    signUpUser.save()
        .then(data => response.json())
        .catch(err => response.json(err))

})

router.get("/users", async (request, response) => {
    try {
        const data = await signUpTemplate.find()
        response.json(data)
    }
    catch (err) {
        res.json({ err: err.errors })

    }
})
router.delete("/remove/:id", async (request, response) => {
    try {
        const removed = await signUpTemplate.remove({ _id: request.params.id })
        response.json(removed)
    }
    catch (err) {
        res.json({ err: err.errors })

    }
})

module.exports = router