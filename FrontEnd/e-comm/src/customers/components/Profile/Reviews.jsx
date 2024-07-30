import React from 'react'

function Reviews() {
  return (
    <div style={{
        margin: '0 20px 0 40px', height: "75vh",
        border: "1px solid lightgray", padding: "10px 20px 0 20px "
    }}>
        <h1 style={{ fontSize: '1.5rem', color: 'black', padding: '10px', display: 'inline-block' }}>
            My Reviews
        </h1>
        <hr class="border-t-1 border-gray-300 m-3" />
        <div style={{ marginTop: '20px', backgroundColor: '#fff4e5', border: '1px solid #ffe1b3', padding: '8px', borderRadius: '5px', margin: "10px" }}>
            <span style={{ color: '#d18a04', fontWeight: 'bold', marginRight: '10px' }}>⚠</span>
            <span>You do not give any reviews.</span>
        </div>
    </div>
  )
}

export default Reviews