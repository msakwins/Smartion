import styled from "styled-components";

const HomepageWrapper = styled.div`
  height: 100%;
	width: 100%;
	background-color: #303030;
	color: #FFFFFF;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 20px 101px;

	.homepage {
		&__header {
			width: 100%;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			margin: 0 0 40px;
	
			&--meteo {
				display: flex;
				flex-direction: column;
				align-items: center;

				img {
					height: 100px;
				}
			}

			&--date {
				font-size: 36px;
				letter-spacing: 2px;
			}
		}

		&__main {
			display: flex;
			width: 100%;
			height: auto;

			&--search {
				width: 100%;
				height: 100px;
			}
		}
	}

`;

export default HomepageWrapper;