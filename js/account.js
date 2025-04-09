const subCategories = {
    "Food Products & Beverages": 
        ["Dairy Products", "Confectionery & Bakery Products", "Cooking Spices & Masala", 'Beverages', 'Dry Fruits', 'Black Tea'],
    "Agriculture": 
        ["Fresh Flowers & Plants", "Food Grains & Cereals", "Fruits & vegetables", 'Agricultural Equipments & Supplies'],
    "Fashion & Apparel": 
        ["Leather Clothing", "Men", "Women", 'Kids'],
    "Ayurveda & Herbal": 
        ['Ayurvedic, Herbal Medicines & Products', 'Ayurvedic Consultants', 'Herbal Foods', 'Pure & Natural Herbs'],
    "Transportation & Logistics": 
        ["Transportation, Logistics & Air Freight Services", "Warehousing & Cold Storage Services", 'Cargo & Shipping Services', 'Packers & Movers'],
    "Packaging Material": 
        ["Sub Category Not Available"],
    "Machinery & Equipment": 
        ["Boiler & Boiler Parts", "Paper Work & Making Machinery", 'Chemical Machinery & Plant', 'Rubber Processing Machinery'],
    "Medical Equipment": 
        ["Sub Category Not Available"],
    "Personal Care & Hygiene": 
        ["Aromatic & Essential Oils", "Cosmetics, Hair Care & Beauty Products", 'Health Care Products'],
    "Safety Products": 
        ["Sub Category Not Available"],
    "Electronics & Electrical Goods": 
        ["Solar & Renewable Energy Products", "Generators, Turbines & Power Plants", 'Electric Cables & Wires', 'Electric Fittings & Components'],
    "Handicraft & Gift Items": 
        ["Sub Category Not Available"],
    "Automobile Tools & Equipments": 
        ["Sub Category Not Available"],
    "Chemicals & Dye Products": 
        ["Sub Category Not Available"],
    "Plastic Products": 
        ["Sub Category Not Available"],
    "Furniture & Home Decoration": 
        ["Bedroom, Bathroom & Kids Furniture", "Living Room & Plastic Furniture", "Metal Furniture Suppliers", 'Furniture Hardware & Fittings']
};

// Function to update sub-category options
function updateSubCategory() {
    const mainCategory = document.getElementById("mainCategory").value;
    const subCategorySelect = document.getElementById("subCategory");

    // Clear existing options
    subCategorySelect.innerHTML = '<option value="">--Select Sub-Category--</option>';

    // Add new sub-category options based on the selected main category
    if (mainCategory && subCategories[mainCategory]) {
        subCategories[mainCategory].forEach(sub => {
            const option = document.createElement("option");
            option.value = sub;
            option.textContent = sub;
            subCategorySelect.appendChild(option);
        });
    }
}

document.addEventListener('DOMContentLoaded', function () {
    tinymce.init({
        selector: '#longDescription', // Target the textarea by ID
        plugins: 'advlist autolink lists link charmap preview anchor searchreplace visualblocks code fullscreen insertdatetime table emoticons',
        toolbar: 'undo redo | bold italic underline strikethrough | subscript superscript | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link table emoticons',
        menubar: false, // Disable the menu bar
        height: 300, // Editor height
    });
});

document.getElementById('productImages').addEventListener('change', function (event) {
    const fileInput = event.target;
    const previewContainer = document.getElementById('imagePreview');
    previewContainer.innerHTML = ''; // Clear previous previews

    Array.from(fileInput.files).forEach(file => {
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = function (e) {
                const img = document.createElement('img');
                img.src = e.target.result;
                img.alt = file.name;
                img.style.width = '100px'; // Thumbnail size
                img.style.margin = '5px';
                previewContainer.appendChild(img);
            };
            reader.readAsDataURL(file);
        }
    });
});