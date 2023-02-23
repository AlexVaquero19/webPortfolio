import API_URL_ex from '../assets/data/experience.json';
import API_URL_ed from '../assets/data/education.json';
import API_URL_ha from '../assets/data/habilities.json';
import API_URL_pr from '../assets/data/projectsSilder.json';   

export async function getExeperience() {
  return API_URL_ex;
}

export async function getEducation(source) {
  return API_URL_ed;
}

export async function getHabilities() {
  return API_URL_ha;
}

export async function getProjects(source) {
  return API_URL_pr;
}