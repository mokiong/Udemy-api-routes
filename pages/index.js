import { useRef } from 'react';

function HomePage() {
    const ref = useRef();

    return (
        <div>
            <h1>The Home Page</h1>

            <form>
                <div>
                    <label htmlFor="email">Your email address</label>
                    <input type="email" id="email" />
                </div>
                <div>
                    <label htmlFor="feedback">Your Feedback</label>
                    <textarea type="text" id="feedback" rows="5" />
                </div>
                <button>Send</button>
            </form>
        </div>
    );
}

export default HomePage;
