export default function News() {
  const news = [
    {
      date: '2025-07-16',
      title: 'DAVE THE DIVER Community Contest',
      content:
        `MapleStory X DAVE THE DIVER: Chef's Special Contest

        Contest Duration:

        PDT (UTC -7): Wednesday, July 23, 2025 at 11:00 AM - Thursday, August 21, 2025 at 11:00 AM
        CEST (UTC +2): Wednesday, July 23, 2025 at 8:00 PM - Thursday, August 21, 2025 at  8:00 PM
        AEST (UTC +10): Thursday, July 24, 2025 at 4:00 AM - Friday, August 22, 2025 at 4:00 AM
        Tie up your aprons, y'all! It's time to create your Chef's Special! Hop into Bancho Sushi and cook up any meal that you want for your own Chef's Special menu. Submit a screenshot of your 'Today's Menu' for your chance to earn some saucy rewards.

        How to Enter:

        Participate by posting in one of the 'MapleStory x DAVE THE DIVER: Chef's Special Contest' threads within the official-contests forum on the Official MapleStory Discord and include the following with your entry:
        In-game character name
        World Name
        Screenshot of your 'Todays Menu' UI with your dishes.
        Tell us what your highest-selling dish was! 
        If you are participating within the NA Region, submit your entry through the 'NA MapleStory x DAVE THE DIVER: Chef's Special Contest' thread.
        If you are participating within the EU Region, submit your entry through the 'EU MapleStory x DAVE THE DIVER: Chef's Special Contest' thread.
        Requirements & Rules:

        One entry per account
        Image must be safe for work.
        Entries that do not follow the above rules will be removed from the entry pool.
        Community Managers will be running a random generator to select 10 lucky winners. 

        Event Prizes:

        NA Region:

        10 random winners will receive:
        Physical Rewards: 
        Pink Bean Tumblr Key Chain
        Green Slime Face Band
        Yeti Pop Socket
        MapleStory Fan
        In-Game Rewards:
        Octopus Tank Chair
        3x EXP Coupon (15 min) x5
        Onyx Apple (x10) Coupon
        EU Region:

        10 random winners will receive:
        10k Maple Points
        Octopus Tank Chair
        Toasted Taiyaki Mount
        3x EXP Coupon (15 min) x5
        Onyx Apple (x10) Coupon
        Submissions will close on August 21, 2025 at 11:00 AM PDT!`
    },
    {
      date: '2025-07-16',
      title: "v.261 Known Issues",
      content:
        `The Known Issues section focuses on the major issues that have significantly impacted the game and community, and which our team is actively addressing. Please note that while we aim to cover the most impactful issues, this list will not encompass every reported issue. Check back regularly for updates on the status of these issues and information on resolved issues, or any new issues that may have been added.

        Here you’ll find a list of known and resolved issues from the v.261 - MapleStory x DAVE THE DIVER update:

        Known Issues:

        Lynn
        The HEXA enhanced [Focus] Awaken skill has an incorrect cooldown of 120 seconds instead of 60 seconds.
        Common
        After the game update on July 16, 2025, some players were unable to open the Compensation Box that was distributed on June 20, 2025. We are currently investigating this issue and will provide an update at a later time.
        Challenger World - Interactive
        Karma Bright Cubes obtained from the Morning Star Feast are not able to select the "AFTER" Potential stat when used.
        Resolved Issues:

        July 17, 2025
        Resolved an issue where Kanna's HEXA Nightghost Guide passive effect incorrectly increased the damage of all skills instead of only Kishin Shoukan.
        Resolved an issue where Kanna's HEXA enhanced Spirit's Domain skill would only reach Stage 2 instead of Stage 3.
        Resolved an issue where using Althea's Support skill during Ride or Die would sometimes cause players to disconnect from the game.
        Resolved an issue where players attempting to challenge Horntail in Ride or Die would sometimes disconnect from the game.
        Resolved an issue where some players were unable to open the Compensation Box.
        Resolved an issue where Lynn's 5th job skill [Focus] Awaken had an incorrect cooldown of 120 seconds instead of 60 seconds.
        However, if HEXA [Focus] Awaken is unlocked, the cooldown changes back to 120 seconds and this issue will be resolved in a future maintenance.
        Resolved an issue where players with older mounts that require a saddle registered were sometimes unable to enter Ride or Die on Code X difficulty.
        Resolved an issue where purchasing a Premium Hyper Teleport Rock with insufficient mesos would display a blank error message.
        Resolved an issue where Adele's Hunting Decree skill could not be used when fighting Ursus.
        Resolved an issue where the Arcane River Droplet Stone exchange text was not displaying properly in Challenger-Heroic World.`
    },
    {
      date: '2025-07-16',
      title: 'MapleStory x DAVE THE DIVER Event',
      content:
        `As an unusual storm washes over Maple World, some new friends from a far-off land have washed up, and need your help to get home... all while making a pretty meso from the superb fishing in the Blue Hole!

        Event Duration (Rewards Enabled):

        PDT (UTC -7): Wednesday, July 16, 2025 (End of Maintenance) - Tuesday, August 26, 2025 4:59 PM
        CEST (UTC +2): Wednesday, July 16, 2025 (End of Maintenance) - Wednesday, August 27, 2025 1:59 AM
        AEST (UTC +10): Wednesday, July 16, 2025 (End of Maintenance) - Wednesday, August 27, 2025 9:59 AM
        Note: DAVE THE DIVER rewards must be purchased from the Diver Token Shop prior to Tuesday, August 26 at 11:59 PM UTC, and all coupons and growth items must also be used by that time.

        Event Duration (Free Play):

        PDT (UTC -7): Wednesday, August 27, 2025 (End of Maintenance) - Tuesday, September 23, 2025 4:59 PM
        CEST (UTC +2): Wednesday, August 27, 2025 (End of Maintenance) - Wednesday, September 24, 2025 1:59 AM
        AEST (UTC +10): Wednesday, August 27, 2025 (End of Maintenance) - Wednesday, September 24, 2025 9:59 AM
        Note: While the DAVE THE DIVER event rewards are only available through Tuesday, August 26, 2025 at 11:59 PM UTC, you will still be able to enjoy the story and event games during the following Free Play section.
        `
    }
  ]

  return (
    <div style={{ padding: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center' }}>NEWS</h1>
      <p>CHECK OUT THE LATEST NEWS</p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
        {news.map((project, index) => (
          <div key={index} style={{ border: '1px solid #ddd', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>
            <div style={{ padding: '1rem' }}>
              <h2>{project.title}</h2>
              <p style={{ color: '#888', fontSize: '0.9rem' }}>{project.date}</p>
              <p style={{ whiteSpace: 'pre-line' }}>{project.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}