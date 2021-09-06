import axios from "axios";
import React, { useState, useEffect } from "react";
import Helmet from 'react-helmet';
import HomepageWrapper from './HomepageWrapper';


	const Homepage = () => {
		const [date, setDate] = useState(new Date());
	
		useEffect(() => {
			const timer = setInterval(() => setDate(new Date()), 100)

			return function cleanup() {
				clearInterval(timer)
			}
		});

		return (
		<HomepageWrapper className="homepage">
			<div className="homepage__header">
				<div className="homepage__header--meteo">
					<img src="/icons/cloud.svg" />
					<span>Meteo</span>
				</div>
				<div className="homepage__header--date">
					<span>{date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
				</div>
			</div>
			<div className="homepage__main">
				<div className="homepage__main--search">
					<Helmet><script async src="https://cse.google.com/cse.js?cx=76708224a45c10a0d"></script></Helmet>
					<div className="gcse-search"></div>
				</div>
			</div>
		</HomepageWrapper>
	)
}

export default Homepage;