import TopNavigation from './TopNavigation.jsx';
import BottomNavigation from './BottomNavigation.jsx';
import StreakCard from './StreakCard.jsx';
import PersonalRecordCard from './PersonalRecordCard.jsx';
import LeagueCard from './LeagueCard.jsx';
import QuickActions from './QuickActions.jsx';
import WorkoutTodayCard from './WorkoutTodayCard.jsx';

/**
 * Canonical client screen. The order of zones is fixed and must not change:
 * streak, personal record, league, quick actions, workout today, bottom navigation.
 */
export function ClientScreen({ theme = 'light', league = 'olive' }) {
  return (
    <div className="ph">
      <TopNavigation notificationCount={3} />
      <div className="scr">
        <StreakCard />
        <PersonalRecordCard />
        <LeagueCard league={league} theme={theme} />
        <QuickActions />
        <WorkoutTodayCard />
      </div>
      <BottomNavigation active="home" />
    </div>
  );
}

export default ClientScreen;
