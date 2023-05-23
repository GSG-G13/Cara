import { useEffect, useState } from 'react';
import axios from 'axios';
// import { Form } from 'react-router-dom';

const FilterComponent = ({ setFilter }) => {
  const [category, setCategory] = useState('');
  useEffect(() => {
    (async function fetchMyAPI() {
      let response = await axios.get('api/v1/categories');
      response = await response.data.data;
      setCategory(response);
    })();
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
      <div className="filter">
        <select
          onChange={(e) =>
            setFilter((pre) => {
              return { ...pre, category: e.target.value };
            })
          }
        >
          <option value="">All</option>
          {categories}
        </select>
        <select
          onChange={(e) =>
            setFilter((pre) => {
              return { ...pre, price: e.target.value };
            })
          }
        >
          <option value="">Price</option>
          <option value={[10, 50]}>10-50</option>
          <option value={[50, 100]}>50-100</option>
          <option value={[100, 200]}>100-200</option>
          <option value={[200, 500]}>200-500</option>
          <option value={[500, 1000]}>500-1000</option>
        </select>
        <input
          type="text"
          placeholder="Search Name"
          name="search"
          id="search"
          onChange={(e) =>
            setFilter((pre) => {
              return { ...pre, search: e.target.value };
            })
          }
        />
      </div>
    </div>
  );
};
export default FilterComponent;
