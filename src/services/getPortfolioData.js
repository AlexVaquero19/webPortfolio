const API_URL_ex = '../../data/experience.json';
const API_URL_ed = '../../data/education.json';
const API_URL_ha = '../../data/habilities.json';
const API_URL_pr = '../../data/projectsSilder.json';

export async function getExeperience() {
  //const response = await fetch(`${API_URL}/${source}.json`);
  const response = await fetch(API_URL_ex);
  const data = await response.json();

  return data;
}

export async function getEducation(source) {
  //const response = await fetch(`${API_URL}/${source}.json`);
  const response = await fetch(API_URL_ed);
  const data = await response.json();

  return data;
}

export async function getHabilities(source) {
  const response = await fetch(API_URL_ha);
  const data = await response.json();

  return data;
}

export async function getProjects(source) {
  const response = await fetch(API_URL_pr);
  const data = await response.json();

  return data;
}