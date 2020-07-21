import { Component, OnInit } from "@angular/core";

@Component({
	selector: "app-home",
	template: `
	<body>
		<section class="hero is-fullheight">
			<div class="container">
				<div class="post post-1">
					<h1 class="name name-1 has-text-centered">Black Lives Matter</h1>
					<p>In Ohio, Biden received 46% support among registered voters and 45% support Trump, according to the Quinnipiac University poll released Wednesday.
Trump's approval stands at 44% approve, 53% disapprove in the Buckeye State and 43% approve, 54% disapprove of his handling of coronavirus.
The majority of voters in Ohio think coronavirus restrictions are being lifted at the right speed -- 60% say so -- and 19% think they're being lifted too quickly and 19% say not fast enough.
Trump leads Biden in prospective handling of the economy (53% Trump would do a better job, 43% Biden), while Biden leads Trump in race relations (54% Biden, 38% Trump), health care (51% Biden, 43% Trump), response to coronavirus (50% Biden, 45% Trump) and handling a crisis (50% Biden, 46% Trump). In Ohio, Biden received 46% support among registered voters and 45% support Trump, according to the Quinnipiac University poll released Wednesday.
Trump's approval stands at 44% approve, 53% disapprove in the Buckeye State and 43% approve, 54% disapprove of his handling of coronavirus.
The majority of voters in Ohio think coronavirus restrictions are being lifted at the right speed -- 60% say so -- and 19% think they're being lifted too quickly and 19% say not fast enough.
Trump leads Biden in prospective handling of the economy (53% Trump would do a better job, 43% Biden), while Biden leads Trump in race relations (54% Biden, 38% Trump), health care (51% Biden, 43% Trump), response to coronavirus (50% Biden, 45% Trump) and handling a crisis (50% Biden, 46% Trump).</p>
				</div>
				<div class="post post-2">
					<h1 class="name name-2 has-text-centered">Title 2</h1>
					<p>In Ohio, Biden received 46% support among registered voters and 45% support Trump, according to the Quinnipiac University poll released Wednesday.
Trump's approval stands at 44% approve, 53% disapprove in the Buckeye State and 43% approve, 54% disapprove of his handling of coronavirus.
The majority of voters in Ohio think coronavirus restrictions are being lifted at the right speed -- 60% say so -- and 19% think they're being lifted too quickly and 19% say not fast enough.
Trump leads Biden in prospective handling of the economy (53% Trump would do a better job, 43% Biden), while Biden leads Trump in race relations (54% Biden, 38% Trump), health care (51% Biden, 43% Trump), response to coronavirus (50% Biden, 45% Trump) and handling a crisis (50% Biden, 46% Trump). In Ohio, Biden received 46% support among registered voters and 45% support Trump, according to the Quinnipiac University poll released Wednesday.
Trump's approval stands at 44% approve, 53% disapprove in the Buckeye State and 43% approve, 54% disapprove of his handling of coronavirus.</p>
				</div>
				<div class="post post-3">
					<h1 class="name name-3 has-text-centered">Title 3</h1>
					<p>In Ohio, Biden received 46% support among registered voters and 45% support Trump, according to the Quinnipiac University poll released Wednesday.
Trump's approval stands at 44% approve, 53% disapprove in the Buckeye State and 43% approve, 54% disapprove of his handling of coronavirus.
The majority of voters in Ohio think coronavirus restrictions are being lifted at the right speed</p>
				</div>
				<div class="post post-4">
					<h1 class="name name-4 has-text-centered">Title 4</h1>
				</div>	
			</div>	
		</section>
	</body>
	`,
	styles: [`
	@import url('https://fonts.googleapis.com/css2?family=Saira+Condensed:wght@600&display=swap');
/*
Style for homepage background
 */
			.hero {
				background-color: #24252A;
				background-size: cover;
				background-position: center center;
			}
			.container{
				margin-top: 4%;
				display: grid;
				width: 80%;
				grid-template-columns: 1fr 1fr;
				grid-row-gap: 30px;
				grid-column-gap: 20px;
				grid-auto-rows: minmax(150px, auto);
			}
			.post{
				background-color: #0002;
			}
			.post-1{
				grid-column: 1/3;
				
			}
			.post-2{
				grid-column: 1/3;
				
			}
			.post-3{
				
				
			}
			.post-4{
				
				
			}
			.name{
				font-size: 32px;
				font-family: 'Saira Condensed', sans-serif;
				font-weight: 600;
				color: #edf0f1;
				margin-top: 10px;
				
			}
			p{
				margin-left: 15px;
				color: white;
				padding: 10px;
			}

		`,
	],
})
export class HomeComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}
}
