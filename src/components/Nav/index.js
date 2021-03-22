import { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

const styles = {
  list: {
    alignItems: "baseline"
  }
}

const Nav = ({ categories, currentCategory, setCurrentCategory }) => {
  useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory.name);
  }, [currentCategory]);

  return (
    <header>
      <nav>
        <ul className="flex-row" style={styles.list}>
          <li>
            <h2>
              <a data-testid="link" href="/">
                <span role="img" aria-label="camera"> 📸</span> Oh Snap!
        </a>
            </h2>
          </li>
          <li className="mx-2">
            <a data-testid="about" href="#about">
              About Me
        </a>
          </li>
          <li className="mx-1">
            <span>Contact</span>
          </li>
          {categories.map((category) => (
            <li 
              className={`mx-1 ${currentCategory.name === category.name && 'navActive'
              }`} 
              key={category.name}>
              <span onClick={() => {
                setCurrentCategory(category)
              }}>
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Nav;