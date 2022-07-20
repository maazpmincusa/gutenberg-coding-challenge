import countries from '../assets/countries.json';
import continentNames from '../assets/continent-names.json';
import continents from '../assets/continents.json';
import { getEmojiFlag } from './utils';
import { __, sprintf } from '@wordpress/i18n';

export default function Preview( { countryCode, relatedPosts } ) {
	if ( ! countryCode ) return null;

	const emojiFlag = getEmojiFlag( countryCode ),
	      hasRelatedPosts = relatedPosts?.length > 0;

	return (
		<div className="xwp-country-card">
			<div className="xwp-country-card__media" data-emoji-flag={ emojiFlag }>
				<div className="xwp-country-card-flag">
					{ emojiFlag }
				</div>
			</div>
			<h3 className="xwp-country-card__heading">
				{ __( 'Hello from' ) }
				{ ' ' }
				<strong>{ countries[countryCode] }</strong>
				{ ' ' }
				(<span className="xwp-country-card__country-code">{ countryCode }</span>),
				{ ' ' }
				{ continentNames[continents[countryCode]] }!
			</h3>
			<div className="xwp-country-card__related-posts">
				<h3 className="xwp-country-card__related-posts__heading">
					{ hasRelatedPosts ? sprintf( __( 'There are %d related posts:' ), relatedPosts.length ) : __( 'There are no related posts.' ) }
				</h3>
				{ hasRelatedPosts && (
					<ul className="xwp-country-card__related-posts__list">
						{ relatedPosts.map( ( relatedPost, index ) => (
							<li key={ index } className="xwp-country-card__related-post">
									<a
										className="xwp-country-card__related-post__link"
										href={ relatedPost.link }
										data-post-id={ relatedPost.id }
									>
										<h3 className="xwp-country-card__related-post__title">
											{ relatedPost.title }
										</h3>
										<p className="xwp-country-card__related-post__excerpt">
											{ relatedPost.excerpt }
										</p>
									</a>
							</li>
						) ) }
					</ul>
				) }
			</div>
		</div>
	);
}
