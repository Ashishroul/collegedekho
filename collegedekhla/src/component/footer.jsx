import React from 'react';
import './footer.css'
import Container from 'react-bootstrap/esm/Container';
export default function Footer() {
  return (
    <div className='parent'>
        
        <div style={{display:'flex',flexDirection:'column',width:"30%"}} className='firstdiv'>
            <div>
            <img src="https://collegedakhla.com/wp-content/uploads/elementor/thumbs/COLLEGE-WHITE-q2iwfvul0ru9epmp8zzy5u1mf8fq043d9u8xksyfpc.png" alt="" />
            </div>
            <div>
            <h6>First Floor , Plot No. 2 , Niti Khand 1, Near Mangal Chowk, Indrapuram. Ghaziabad (UP) 201014</h6>
            <h6>director@collegedakhla.com</h6>
            <h6>+919899880100</h6>
            </div>
        </div>
     
        <div>
        <table>
            <thead>
                <tr>
                    <th>Quick Links</th>
                    <th>Helpful Links</th>
                    <th>Page</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                   <td>Term of Service</td>
                   <td>Privacy Policy</td>
                   <td>Cookie Policy</td>
                   
                </tr>
                <tr>
                   <td>About Us</td>
                   <td>Careers</td>
                   <td>News & Article</td>
                  
                </tr>
                <tr>
                   <td>About Us</td>
                   <td>Careers</td>
                   <td>News & Article</td>
             
                </tr>
            </tbody>
        </table>
        </div>
      
    </div>
  );
}