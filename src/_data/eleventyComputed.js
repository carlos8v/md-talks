const local = 'http://localhost:8080'
const domainPath = 'https://carlos8v.github.io/md-talks';
const DEBUB = process.env.MODE === 'development';

module.exports = {
  repo: 'https://github.com/carlos8v/md-talks',
  domain: DEBUB ? local : domainPath,
  rootPath: function(data) {
    return data.page.url
      .split('/')
      .filter(function(x) {
        return x;
      })
      .map(function() {
        return '../';
      })
      .join('');
  }
}
