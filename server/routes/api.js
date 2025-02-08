const express = require('express');
const router = express.Router();
const SliderController = require("../app/controllers/SliderController.js")
const BlogController = require("../app/controllers/BlogController.js")
const UserController = require("../app/controllers/UserController.js")
const TeamMemberController = require("../app/controllers/TeamMemberController.js")
const ServiceController = require("../app/controllers/ServiceController.js")




//User
router.get('/login/:email', UserController.LoginUser)
router.get('/otpVerify/:email/:otp', UserController.OTPVerify)
router.get('/logout', UserController.UserLogout)




router.get('/sliderList', SliderController.SliderList)
router.get('/blogList', BlogController.BlogList)




//Crud- Blog
router.post('/createBlog', BlogController.CreateBlog)
router.get('/readBlog', BlogController.BlogList)
router.get('/readBlogById/:id', BlogController.BlogListById)
router.post('/updateBlog/:id', BlogController.UpdateBlog)
router.get('/deleteBlog/:id', BlogController.DeleteBlog)


router.get('/memberList', TeamMemberController.TeamMemberList)
router.post('/createMember', TeamMemberController.InsertTeamMemberList)
router.get('/deleteMember/:id', TeamMemberController.DeleteMember)
router.post('/updateMember/:id', TeamMemberController.UpdateMember)
router.get('/memberListById/:id', TeamMemberController.MemberListById)


router.get('/service', ServiceController.ServiceList)
router.post('/createService', ServiceController.CreateService)
router.get('/DeleteService/:id', ServiceController.DeleteService)
router.post('/UpdateService/:id', ServiceController.UpdateService)
router.get('/serviceListById/:id', ServiceController.ServiceListById)


module.exports = router;

