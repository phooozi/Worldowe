import { Component, OnInit } from "@angular/core";

@Component({
	selector: "app-donate",
	template: `
	<body>
		<section class="background">
			<div class="hero is-fullheight">
				<div class="container has-text-centered">
					<h1 class="title">
						Donate to help fight racism!
					</h1>
				<div class="item-links">
						<a
						target="_blank"
						rel="noopener noreferrer"
						href="https://secure.actblue.com/donate/naacp-1"
						>NAACP</a>
						<br>
						<a
						target="_blank"
						rel="noopener noreferrer"
						href="https://donate.splcenter.org/"
						>Southern Poverty Law Center</a>
						<br>
						<a
						target="_blank"
						rel="noopener noreferrer"
						href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=ZHQKRGV7JHCWC&source=url"
						>Campaign Zero</a>
						<br>
						<a
						target="_blank"
						rel="noopener noreferrer"
						href="https://afj.salsalabs.org/donate/index.html"
						>Alliance for Justice</a>
						<br>
						<a
						target="_blank"
						rel="noopener noreferrer"
						href="https://secure.actblue.com/donate/lcchr"
						>The Leadership Conference on Civil and Human Rights</a>
						<br>
						<a
						target="_blank"
						rel="noopener noreferrer"
						href="https://nul.org/donate"
						>National Urban League</a>
				</div>
					
				</div>
			</div>
		</section>
	</body>
	`,
	styles: [
		`
		.hero{
			margin-top: 20px;
		}
			
		h1{
			color: white;
		}
		a{
			flex-direction: column;
			display: inline-block;
			padding: 20px;
			
		}
		`
	],
})
export class DonateComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}
}
