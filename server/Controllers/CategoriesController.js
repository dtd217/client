import Categories from '../Models/CategoriesModel.js'
import asyncHandler from 'express-async-handler'

// ********** PUBLIC CONTROLLERS **********

// @desc    Get all categories
// @route   GET /api/categories
// @access  Public
const getCategories = asyncHandler(async (req, res) => {
   try {
      // Tìm tất cả categories trong db
      const categories = await Categories.find({})
      // Gửi categories đến client
      res.json(categories)
   }
   catch (error) {
      res.status(400).json({ message: error.message })
   }
})

// ********** ADMIN CONTROLLERS **********

// @desc    Create category
// @route   POST /api/categories
// @access  Private/Admin
const createCategory = asyncHandler(async (req, res) => {
   try {
      const { title, value } = req.body
      const category = new Categories({ title, value })
      const createdCategory = await category.save()
      res.status(201).json(createdCategory)
   }
   catch (error) {
      res.status(400).json({ message: error.message })
   }
})

// @desc    Update category
// @route   PUT /api/categories/:id
// @access  Private/Admin
const updateCategory = asyncHandler(async (req, res) => {
   try {
      const category = await Categories.findById(req.params.id)
      if (category) {
         category.title = req.body.title || category.title
         category.value = req.body.value || category.value
         const updatedCategory = await category.save()
         res.json(updatedCategory)
      }
      else {
         res.status(404)
         throw new Error('Không tìm thấy danh mục')
      }
   }
   catch (error) {
      res.status(400).json({ message: error.message })
   }
})

// @desc    Delete category
// @route   DELETE /api/categories/:id
// @access  Private/Admin
const deleteCategory = asyncHandler(async (req, res) => {
   try {
      const category = await Categories.findById(req.params.id)
      if (category) {
         await category.deleteOne()
         res.json({ message: 'Xóa danh mục thành công!' })
      }
      else {
         res.status(404)
         throw new Error('Không tìm thấy danh mục')
      }
   }
   catch (error) {
      res.status(400).json({ message: error.message })
   }
})

export { getCategories, createCategory, updateCategory, deleteCategory }