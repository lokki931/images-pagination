import React from 'react';

export default function Image({ items }) {
    return (
        <div className='row'>
            {items.map(item => {
                return (
                    <div className='col-3 mb-3' key={item.id}>
                        <img className="img-thumbnail" src={item.url} alt={item.title} />
                    </div>
                );
            })}
        </div>
    )
}
