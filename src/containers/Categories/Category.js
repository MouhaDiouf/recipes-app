import React from 'react';
import Proptypes from 'prop-types';
import { connect } from 'react-redux';
import { BrowserRouter as Route, Link } from 'react-router-dom';
import './Category.css';
import { selectRecipe } from '../../actions/actions';

export function Category({
  name,
  alt,
  image,
  search,
  findRecipes,
  description,
}) {
  return (
    <Route>
      <div className="category card mb-3">
        <h3 data-testid="category-name" className="card-header">
          {name}
        </h3>
        <img src={image} alt={alt} />
        <div className="card-body">
          <p data-testid="description" className="card-text">
            {description}
          </p>
        </div>
        <div className="card-body">
          <Link
            to="/results"
            className="card-link"
            onClick={() => findRecipes(search)}
          >
            See More
          </Link>
        </div>
      </div>
    </Route>
  );
}

Category.propTypes = {
  name: Proptypes.string.isRequired,
  alt: Proptypes.string.isRequired,
  image: Proptypes.string.isRequired,
  search: Proptypes.string.isRequired,
  findRecipes: Proptypes.func.isRequired,
  description: Proptypes.string.isRequired,
};
const mapDispatchToProps = dispatch => ({
  findRecipes: recipe => dispatch(selectRecipe(recipe)),
});
export default connect(null, mapDispatchToProps)(Category);
