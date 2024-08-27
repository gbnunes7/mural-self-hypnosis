const Button = ({children, background,color}) => {
    return (
        <button className="py-2 px-6 w-[153px] rounded-[32px] text-[20px] text-center border border-[#041832]" style={{backgroundColor:background, color:color}}>
            {children}
        </button>
    )
}

export default Button