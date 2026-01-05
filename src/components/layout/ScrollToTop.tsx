import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
    const location = useLocation();

    useEffect(() => {
        // Only scroll to top if we don't have a specific scroll target in the state
        if (!(location.state as any)?.scrollTo) {
            window.scrollTo(0, 0);
        }
    }, [location.pathname, location]);

    return null;
}
