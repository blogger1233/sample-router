export default function Name() {
    return (<div className="right">
        <div className="first-row">
            <img
                src="/public/manja-vitolic-gKXKBY-C-Dk-unsplash.jpg"
                className="image"
            />
            <div className="row-inside">
                <h3>Your name
                    <img
                        src="/public/star.svg"
                        className="logo"
                    />
                </h3>
                <p className="blue">Your_handle</p>
                <p>Some notes</p>
                <p>
                    <button className="search_button blue">
                        Edit
                    </button>
                    <button className="search_button red">
                        Delete
                    </button>
                </p>
            </div>
        </div>
    </div>)
}