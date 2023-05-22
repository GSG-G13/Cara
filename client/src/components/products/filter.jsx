import { useEffect, useState } from 'react';
import axios from 'axios';
import { Form } from 'react-router-dom';

const FilterComponent = () => {
  const [category, setCategory] = useState('');
  useEffect(() => {
    async function fetchMyAPI() {
      let response = await axios.get('api/v1/categories');
      response = await response.data.data;
      setCategory(response);
    }
    fetchMyAPI();
  }, []);

  const categories = !category ? (
    <option>loading...</option>
  ) : (
    category.map((cat) => (
      <option key={cat.id} value={cat.name}>
        {cat.name}
      </option>
    ))
  );

  return (
    <div>
      <Form className="filter">
        <select>
          <option value="">Category</option>
          {categories}
        </select>
        <select>
          <option value="">Price</option>
          <option value="10-50">10-50</option>
          <option value="50-100">50-100</option>
          <option value="100-200">100-200</option>
          <option value="200-500">200-500</option>
          <option value="500-1000">500-1000</option>
        </select>
        <input
          type="text"
          placeholder="Search Name"
          name="search"
          id="search"
        />
      </Form>
    </div>
  );
};
export default FilterComponent;
