import { capitalizeFirstLetter } from '../../utils/helpers';

const styles = {
  list: {
    alignItems: "baseline"
  }
}

const Nav = () => {
  const categories = [
    {
      name: "commercial",
      description:
        "Photos of grocery stores, food trucks, and other commercial projects",
    },
    { name: "portraits", description: "Portraits of people in my life" },
    { name: "food", description: "Delicious delicacies" },
    {
      name: "landscape",
      description: "Fields, farmhouses, waterfalls, and the beauty of nature",
    },
  ];

  function categorySelected(name) {
    console.log(`${name} clicked`)
  }

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
          <li>
            <span>Contact</span>
          </li>
          {categories.map((category) => (
            <li
              onClick={() => categorySelected(category.name)}
              className="mx-1"
              key={category.name}
            >
              <span>
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