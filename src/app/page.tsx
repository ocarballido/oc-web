import OcBadge from '@/components/molecules/badge';
import OcBadgeIndicator from '@/components/molecules/badge-indicator';
import OcButton from '@/components/molecules/button';
import OcButtonLink from '@/components/molecules/button-link';

export default function Home() {
	return (
		<main className="">
			<div className="flex gap-4 flex-col">
				<OcButton label="Button" />
				<OcButtonLink label="Button" href="#" />
				<OcButtonLink label="Button" href="#" color="white" active />
				<OcButton label="Button" color="secondary" />
				<OcButton label="Button" color="white" />
				<OcButton
					label="Button"
					color="secondary"
					icon="/static/icons/brain-left-primary.svg"
				/>
				<OcButton
					label="Button"
					color="white"
					icon="/static/icons/brain-left-primary.svg"
				/>
				<OcButton label="Button" active />
				<OcButton label="Button" active color="secondary" />
				<OcButton label="Button" active color="white" />
				<OcBadgeIndicator />
				<OcBadgeIndicator type="code" />
				<OcBadgeIndicator type="design" />
				<OcBadgeIndicator color="white" />
				<OcBadgeIndicator color="white" type="code" />
				<OcBadgeIndicator color="white" type="design" />
				<OcBadge label="Label" />
				<OcBadge label="Label" color="secondary" />
				<OcBadge label="Label" color="white" />
			</div>
		</main>
	);
}
