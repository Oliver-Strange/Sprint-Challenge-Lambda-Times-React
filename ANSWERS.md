# What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.

    PropTypes are used for debugging. They enable the developer to validate the data being passed around. It also gives warnings that would normally not show up.

# Describe a life-cycle event in React.

    Lifecycle events allow the developer to free up resources of components that are done being used. The lifecycle moves in three phases Mounting, Updating, and Unmounting. 

# Explain the details of a Higher Order Component.

    HOC are advanced react patterns for designing components that share behavior or data. It allows the developer to reuse bits of logic in an application. HOC is a function that receives a component as an argument, adds some functionality, and returns a new class component. 

# What are three different ways to style components in React? Explain some of the benefits of each.

    Three different ways to style components in React are: 
        Normal Css, allows you to use className on elements, is nice because it is vanilla css.
        
        Reactstrap/Bootstrap, allows the use of pre-made component styles, is nice because you can import the components you want, not nice because you might have to make your own styles Important to override bootstrap styles.

        Styled-Components, allows the developer to make components that hold specific styles to be used where ever they are imported, nice because it allows for styles to be organized like components. 