import { useState } from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import "../Layout/style/admin.css"

function Admin() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    price: "",
    brand: "",
    imageID: "",
    isFeatured: false,
  });

  const brands = ["Zeppi", "Delicata", "Marsovin", "Cisk", "Blue Label"];
  const categories = ["Licor", "Vino Blanco", "Vino Rojo", "Cerveza"];
  const db = getFirestore();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prevData) => {
      const updatedData = {
        ...prevData,
        [name]: type === "checkbox" ? checked : value,
      };

      if (name === "title") {
        updatedData.imageID = value
          .toLowerCase()
          .replace(/\s+/g, "-")
          .concat(".jpg");
      }
      return updatedData;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const docRef = await addDoc(collection(db, "items"), {
        title: formData.title,
        description: formData.description,
        category: formData.category,
        price: Number(formData.price),
        brand: formData.brand,
        imageID: formData.imageID,
        isFeatured: formData.isFeatured,
      });

      setFormData({
        title: "",
        description: "",
        category: "",
        price: "",
        brand: "",
        imageID: "",
        isFeatured: false,
      });
    } catch (error) {
      alert("Error al agregar producto:", error);
    }
  };

  return (
    <div className="admin-page">
      <h1>Admin - Agregar Productos</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Título</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Descripción</label>
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Precio</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Categoria</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          >
            <option value="">Selecciona una Categoria</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Marca</label>
          <select
            name="brand"
            value={formData.brand}
            onChange={handleChange}
            required
          >
            <option value="">Selecciona una Marca</option>
            {brands.map((brand) => (
              <option key={brand} value={brand}>
                {brand}
              </option>
            ))}
          </select>
        </div>
        <div className="checkbox-group">
          <label>Destacado</label>
          <input
            type="checkbox"
            name="isFeatured"
            checked={formData.isFeatured}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Agregar producto</button>
      </form>
    </div>
  );
}

export default Admin;
