import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { destroyCategory } from './store';

const Categories = () => {
  const { categories, todos } = useSelector(state => state);
  const dispatch = useDispatch();
  return (
    <div >
      <ul id='categories'>
        {
          categories.map(category => {
            const filtered = todos.filter(todo => todo.categoryId === category.id);
            return (
              <li class='categoriesList' key={category.id}>
                {category.name.toUpperCase()} 
                ({filtered.length})
                <button
                  disabled={filtered.length}
                  onClick={
                    () => dispatch(destroyCategory(category))
                  }
                >
                  Delete
                </button>
              </li>
            );
          })
        }
      </ul>
    </div>
  );
};

export default Categories;
