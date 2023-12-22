import {
    useNavigate,
  } from 'react-router-dom';

export default function Page() {
    const navigate = useNavigate();
    return (
        <div>
            <h1>About Page</h1>
            {/* back button using react dom router */}
            <button onClick={() => navigate(-1)}>Go back</button>
            <p>
                This is the about page. You can edit it at{' '}
                <code>src/pages/about.jsx</code>.
            </p>
        </div>
    )
}