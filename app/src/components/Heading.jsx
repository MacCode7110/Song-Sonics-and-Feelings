const Heading = ({ children, size, className }) => {
    const classes = `title is-${size} ${className}`.trim()
    
    return (
        <h1 className={classes}>
            {children}
        </h1>
    )
}

export default Heading