import './Footer.css';
function Footer(){
    return(
        <div className="d-flex align-items-start justify-content-start">

	<div style={{'marginRight':'200px'}}>
      <ul className='list-unstyled'>
		<li><b>Support</b></li>
		<li>Help Center</li>
		<li>Air Cover</li>
		<li>Anti-discrimination</li>
		<li>Disability support</li>
		<li>Cancellation options</li>
		<li>Report neighborhood concern</li>
	  </ul>
	</div>  
      
    
	<div style={{'marginRight':'200px'}}>
      <ul className='list-unstyled'>
		<li><b>Hosting</b></li>
		<li>AirCover for Hosts</li>
		<li>Hosting resources</li>
		<li>Community forum</li>
		<li>Hosting responsibly</li>
		<li>Airbnb-friendly apartments</li>
		<li></li>
	</ul>
	</div>
      
    

	<div>
      <ul className='list-unstyled'>
		<li><b>Airbnb</b></li>
		<li>Newsroom</li>
		<li>New features</li>
		<li>Careers</li>
		<li>Investors</li>
		<li>Gift cards</li>
		<li>Airbnb.org emergency stays</li>
	  </ul>
	</div>
      
    
</div>

    );
}

export default Footer;