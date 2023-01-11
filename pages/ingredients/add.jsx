function Add(){
    return (
        <div>
            <h1>Add Ingredient</h1>
            <form>
                <label>Name</label>
                <input type="text" name="name" />
                <label>Amount</label>
                <input type="text" name="amount" />
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default Add;