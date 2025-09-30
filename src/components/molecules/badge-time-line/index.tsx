import OcBadge from '../badge';

type BadgeTimeLineProps = {
	begin: string;
	end: string;
};

const OcBadgeTimeLine = ({ begin, end }: BadgeTimeLineProps) => {
	return (
		<div className="flex gap-1 items-center">
			<OcBadge label={end} />
			<span className="w-1 h-1 bg-primary-300 rounded-full"></span>
			<span className="w-1 h-1 bg-primary-100 rounded-full"></span>
			<span className="w-1 h-1 bg-primary-50 rounded-full"></span>
			<OcBadge label={begin} color="secondary" />
		</div>
	);
};

export default OcBadgeTimeLine;
