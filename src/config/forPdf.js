import * as config from './index';

const breaker = '\n\n\n';
const starter = () => {
  const { name, email, phone, address } = config.myself;
  return name + '\n' + email + '\n' + phone + '\n' + address + breaker;
};
const attributes = {};
attributes.aboutMe = () => {
  let text = '';
  config.aboutMe.forEach(({ txt }) => {
    text += txt + '\n';
  });
  return text;
};
attributes.skills = () => {
  let text = '';
  config.skills.forEach(({ title, options }) => {
    text += title + ': ' + options.join(', ') + '\n';
  });
  return text;
};
attributes.portfolio = () => {
  let text = '';
  config.portfolio.forEach(({ name, creator, desc, link }) => {
    text += name + ' (' + creator + '): ' + desc + '\n\n';
  });
  return text;
};

attributes.workExperience = () => {
  let text = '';
  config.workExperience.forEach(
    ({ position, company, start, end, details }) => {
      text += `${position} | ${company}\n${start} - ${end}\n${details}\n\n`;
    }
  );
  return text;
};

attributes.education = () => {
  let text = '';
  config.education.forEach(({ xm, institution, period, result }) => {
    text += `${xm} | ${institution}\n${period} - ${result}\n\n`;
  });
  return text;
};

attributes.awards = () => {
  let text = '';
  config.awards.forEach(({ txt }) => {
    text += txt + '\n';
  });
  return text;
};
attributes.externalLinks = () => {
  let text = '';
  config.externalLinks.forEach(({ title, url }) => {
    text += title + ': ' + url + '\n';
  });
  return text;
};

let text = starter();

config.mainAttributes.forEach(attribute => {
  if (attributes[attribute.value]) {
    text += attribute.title + '\n';
    text += attributes[attribute.value]();
    text += breaker;
  }
});

console.log(text);
