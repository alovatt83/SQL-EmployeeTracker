const express = require('express');
const router = express.Router();

router.use(require('./employeesRoutes'));
router.use(require('./departmentRoutes'));
router.use(require('./salaryRoutes'));
router.use(require('./managerRoutes'));

module.exports = router;
