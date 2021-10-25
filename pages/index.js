import { useRef } from 'react';

function HomePage() {
    const emailInput = useRef();
    const feedBackInput = useRef();

    function submitFormHandler(event) {
        event.preventDefault();

        const enteredEmail = emailInput.current.value;
        const enteredFeedBack = feedBackInput.current.value;

        const reqBody = { email: enteredEmail, text: enteredFeedBack };

        fetch('/api/feedback', {
            method: 'POST',
            body: JSON.stringify(reqBody),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((res) => res.json())
            .then((data) => console.log(data));
    }

    return (
        <div>
            <h1>The Home Page</h1>

            <form onSubmit={submitFormHandler}>
                <div>
                    <label htmlFor="email">Your email address</label>
                    <input type="email" id="email" ref={emailInput} />
                </div>
                <div>
                    <label htmlFor="feedback">Your Feedback</label>
                    <textarea
                        type="text"
                        id="feedback"
                        rows="5"
                        ref={feedBackInput}
                    />
                </div>
                <button>Send</button>
            </form>
        </div>
    );
}

export default HomePage;
