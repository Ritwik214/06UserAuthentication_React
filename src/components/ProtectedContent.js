import React from 'react';

const ProtectedContent = () => {
    return (
        <div>
            <h2>Protected Content</h2>
            <p>This content is protected. Only authenticated users can see this.</p>
        </div>
    );
};

export default ProtectedContent;