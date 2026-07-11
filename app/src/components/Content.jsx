const Content = ({ children, size, className }) => {
     const classes = `content is-size-${size} ${className}`.trim()

     return <p className={classes}>{children}</p>
}

export default Content
