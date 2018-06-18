import React from 'react';

// @material-ui/icons
import CardTravel from '@material-ui/icons/CardTravel';
import Extension from '@material-ui/icons/Extension';
import Fingerprint from '@material-ui/icons/Fingerprint';
import FlightLand from '@material-ui/icons/FlightLand';
import Build from '@material-ui/icons/Build';

// core components
import CustomDropdown from 'components/CustomDropdown/CustomDropdown.jsx';

// ##############################
// // // stories for Widgets view
// #############################

const widgetStories = [
	{
		// First story
		inverted: true,
		badgeColor: 'danger',
		badgeIcon: CardTravel,
		title: 'Some Title',
		titleColor: 'danger',
		body: (
			<p>
				Wifey made the best Father's Day meal ever. So thankful so happy so blessed. Thank you for making my
				family We just had fun with the “future” theme !!! It was a fun night all together ... The always rude
				Kanye Show at 2am Sold Out Famous viewing @ Figueroa and 12th in downtown.
			</p>
		),
		footerTitle: '11 hours ago via Twitter',
	},
	{
		// Second story
		inverted: true,
		badgeColor: 'success',
		badgeIcon: Extension,
		title: 'Another One',
		titleColor: 'success',
		body: (
			<p>
				Thank God for the support of my wife and real friends. I also wanted to point out that it’s the first
				album to go number 1 off of streaming!!! I love you Ellen and also my number one design rule of anything
				I do from shoes to music to homes is that Kim has to like it....
			</p>
		),
	},
	{
		// Third story
		inverted: true,
		badgeColor: 'info',
		badgeIcon: Fingerprint,
		title: 'Another Title',
		titleColor: 'info',
		body: (
			<div>
				<p>
					Called I Miss the Old Kanye That’s all it was Kanye And I love you like Kanye loves Kanye Famous
					viewing @ Figueroa and 12th in downtown LA 11:10PM
				</p>
				<p>
					What if Kanye made a song about Kanye Royère doesn't make a Polar bear bed but the Polar bear couch
					is my favorite piece of furniture we own It wasn’t any Kanyes Set on his goals Kanye
				</p>
			</div>
		),
		footer: (
			<CustomDropdown
				buttonIcon={Build}
				buttonProps={{
					round: true,
					style: { marginBottom: '0' },
					color: 'info',
				}}
				dropdownList={['Action', 'Another action', 'Something else here', { divider: true }, 'Separated link']}
			/>
		),
	},
];

// ##############################
// // // stories for Timeline view
// #############################

const stories = [
	{
		// First story
		inverted: true,
		badgeColor: 'danger',
		badgeIcon: CardTravel,
		title: 'Some Title',
		titleColor: 'danger',
		body: (
			<p>
				Wifey made the best Father's Day meal ever. So thankful so happy so blessed. Thank you for making my
				family We just had fun with the “future” theme !!! It was a fun night all together ... The always rude
				Kanye Show at 2am Sold Out Famous viewing @ Figueroa and 12th in downtown.
			</p>
		),
		footerTitle: '11 hours ago via Twitter',
	},
	{
		// Second story
		badgeColor: 'success',
		badgeIcon: Extension,
		title: 'Another One',
		titleColor: 'success',
		body: (
			<p>
				Thank God for the support of my wife and real friends. I also wanted to point out that it’s the first
				album to go number 1 off of streaming!!! I love you Ellen and also my number one design rule of anything
				I do from shoes to music to homes is that Kim has to like it....
			</p>
		),
	},
	{
		// Third story
		inverted: true,
		badgeColor: 'info',
		badgeIcon: Fingerprint,
		title: 'Another Title',
		titleColor: 'info',
		body: (
			<div>
				<p>
					Called I Miss the Old Kanye That’s all it was Kanye And I love you like Kanye loves Kanye Famous
					viewing @ Figueroa and 12th in downtown LA 11:10PM
				</p>
				<p>
					What if Kanye made a song about Kanye Royère doesn't make a Polar bear bed but the Polar bear couch
					is my favorite piece of furniture we own It wasn’t any Kanyes Set on his goals Kanye
				</p>
			</div>
		),
		footer: (
			<CustomDropdown
				buttonIcon={Build}
				buttonProps={{
					round: true,
					style: { marginBottom: '0' },
					color: 'info',
				}}
				dropdownList={['Action', 'Another action', 'Something else here', { divider: true }, 'Separated link']}
			/>
		),
	},
	{
		// Fourth story
		badgeColor: 'warning',
		badgeIcon: FlightLand,
		title: 'Another One',
		titleColor: 'warning',
		body: (
			<p>
				Tune into Big Boy's 92.3 I'm about to play the first single from Cruel Winter also to Kim’s hair and
				makeup Lorraine jewelry and the whole style squad at Balmain and the Yeezy team. Thank you Anna for the
				invite thank you to the whole Vogue team
			</p>
		),
	},
];

// ##############################
// // // Tasks for TasksCard - see Widget view
// #############################

var bugs = [
	'Sign contract for "What are conference organizers afraid of?"',
	'Lines From Great Russian Literature? Or E-mails From My Boss?',
	'Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit',
	'Create 4 Invisible User Experiences you Never Knew About',
];
var website = [
	'Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit',
	'Sign contract for "What are conference organizers afraid of?"',
];
var server = [
	'Lines From Great Russian Literature? Or E-mails From My Boss?',
	'Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit',
	'Sign contract for "What are conference organizers afraid of?"',
];

// ##############################
// // // Tasks for TasksCard - see RTLSupport view
// #############################

var rtlBugs = [
	'فقد لمحاكم الاندونيسية, بلاده بالتوقيع تم يبق. جعل السبب وفرنسا الصينية أي.',
	'بحث. كل مما ٢٠٠٤ شاسعة العسكري جعل السبب وفرنسا الصينية أي.',
	'تسبب أفريقيا ضرب عن, عن إنطلاق جعل السبب وفرنسا الصينية أي.',
	'قدما مليون بين عن, مرجع منتصف الأمريكية جعل السبب وفرنسا الصينية أي.',
];
var rtlWebsite = [
	'قدما مليون بين عن, مرجع منتصف الأمريكية جعل السبب وفرنسا الصينية أي.',
	'قدما مليون بين عن, مرجع منتصف الأمريكية جعل السبب وفرنسا الصينية أي.',
];
var rtlServer = [
	'قدما مليون بين عن, مرجع منتصف الأمريكية جعل السبب وفرنسا الصينية أي.',
	'قدما مليون بين عن, مرجع منتصف الأمريكية جعل السبب وفرنسا الصينية أي.',
	'قدما مليون بين عن, مرجع منتصف الأمريكية جعل السبب وفرنسا الصينية أي.',
];

// ##############################
// // // data for datatables.net in DataTables view
// #############################

const dataTable = {
	headerRow: ['Order', 'Customer', 'Date', 'Due by', 'Status'],
	footerRow: ['Order', 'Customer', 'Date', 'Due by', 'Status'],
	dataRows: [
		['180621', 'Oil Industries', '2018-06-01', '2018-06-12', 'Pending'],
		['180634', 'HO Industries', '2018-06-01', '2018-06-12', 'Pending'],
		['180621', 'ABC Company', '2018-06-01', '2018-06-12', 'Shipped'],
		['180621', 'BGT Industries', '2018-06-01', '2018-06-12', 'Pending'],
		['180621', 'YNJ Industries', '2018-06-01', '2018-06-12', 'Pending'],
		['180621', 'Oil Industries', '2018-06-01', '2018-06-12', 'Ready to Shipped'],
		['180621', 'Oil Industries', '2018-06-01', '2018-06-12', 'Pending'],
		['180621', 'Oil Industries', '2018-06-01', '2018-06-12', 'Ready to Shipped'],
		['180621', 'Oil Industries', '2018-06-01', '2018-06-12', 'Pending'],
		['180621', 'XYZ Enterprises', '2018-06-01', '2018-06-12', 'Pending'],
		['180621', 'Oil Industries', '2018-06-01', '2018-06-12', 'Ready to Shipped'],
		['180621', 'Oil Industries', '2018-06-01', '2018-06-12', 'Pending'],
		['180621', 'Oil Industries', '2018-06-01', '2018-06-12', 'Pending'],
		['180621', 'Oil Industries', '2018-06-01', '2018-06-12', 'Shipped'],
		['180621', 'Oil Industries', '2018-06-01', '2018-06-12', 'Shipped'],
		['180621', 'J&J Industries', '2018-06-01', '2018-06-12', 'Pending'],
		['180622', 'Oil Industries', '2018-06-01', '2018-06-12', 'Pending'],
		['180611', 'AU Company', '2018-06-01', '2018-06-12', 'Shipped'],
		['180621', 'AU Company', '2018-06-01', '2018-06-12', 'Pending'],
		['180621', 'Oil Industries', '2018-06-01', '2018-06-12', 'Shipped'],
		['180606', 'Oil Industries', '2018-06-01', '2018-06-12', 'Shipped'],
		['180621', 'Oil Industries', '2018-06-01', '2018-06-12', 'Pending'],
		['180601', 'Oil Industries', '2018-06-01', '2018-06-12', 'Shipped'],
		['180621', 'Oil Industries', '2018-06-01', '2018-06-12', 'Pending'],
		['180621', 'Oil Industries', '2018-06-01', '2018-06-12', 'Shipped'],
		['180621', 'Oil Industries', '2018-06-01', '2018-06-12', 'Pending'],
		['180621', 'Oil Industries', '2018-06-01', '2018-06-12', 'Pending'],
		['180621', 'Oil Industries', '2018-06-01', '2018-06-12', 'Shipped'],
		['180621', 'Oil Industries', '2018-06-01', '2018-06-12', 'Pending'],
		['180621', 'Oil Industries', '2018-06-01', '2018-06-12', 'Pending'],
		['180621', 'Oil Industries', '2018-06-01', '2018-06-12', 'Pending'],
		['180621', 'Oil Industries', '2018-06-01', '2018-06-12', 'Pending'],
		['180621', 'Oil Industries', '2018-06-01', '2018-06-12', 'Shipped'],
		['180621', 'Oil Industries', '2018-06-01', '2018-06-12', 'Pending'],
		['180621', 'Oil Industries', '2018-06-01', '2018-06-12', 'Pending'],
		['180621', 'Oil Industries', '2018-06-01', '2018-06-12', 'Ready to Shipped'],
		['180621', 'Oil Industries', '2018-06-01', '2018-06-12', 'Pending'],
		['180621', 'Oil Industries', '2018-06-01', '2018-06-12', 'Pending'],
		['180621', 'Oil Industries', '2018-06-01', '2018-06-12', 'Pending'],
		['180621', 'Oil Industries', '2018-06-01', '2018-06-12', 'Pending'],
		['180621', 'Oil Industries', '2018-06-01', '2018-06-12', 'Pending'],
		['180621', 'Oil Industries', '2018-06-01', '2018-06-12', 'Pending'],
		['180621', 'Oil Industries', '2018-06-01', '2018-06-12', 'Pending'],
	],
};

export {
	// stories for Widgets view
	widgetStories,
	// stories for Timeline view
	stories,
	// these 3 are used to create the tasks lists in TasksCard - Widget view
	bugs,
	website,
	server,
	// these 3 are used to create the tasks lists in TasksCard - RTLSupport view
	rtlBugs,
	rtlWebsite,
	rtlServer,
	// data for datatables.net in DataTables view
	dataTable,
};