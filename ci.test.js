var fs = require('fs'); 

describe('CI sequence', () => {

  var fileContents;
  beforeEach(() => {
    fileContents = fs.readFileSync('ci.md', 'utf8');
  });

  it('the list has a header', () => {
    expect(/.*#.*/ig.test(fileContents)).toBe(true);
  });

  // TODO add the tests between these comments =>

  it('the list contains instant messaging software information', () => {
    expect(fileContents).toContain('即时通信软件');
  });

  it('the list mentions at least one messaging platform', () => {
    const platforms = ['Mattermost', 'Rocket.Chat', 'Matrix', 'Zulip', 'Element'];
    const hasPlatform = platforms.some(platform => fileContents.includes(platform));
    expect(hasPlatform).toBe(true);
  });

  // TODO <= add the tests between these comments

});
