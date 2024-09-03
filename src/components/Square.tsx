const Square = ({ value, className }: { value: string; className?: string }) => {
  return <button className={`border-gray-400 p-2 h-16 w-16 text-4xl ${className}`}>{value}</button>
}

export default Square
