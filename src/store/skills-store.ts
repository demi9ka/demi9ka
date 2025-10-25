import { makeAutoObservable } from 'mobx'

export type TabType = 'frontend' | 'backend' | 'other'

class SkillsStore {
  activeTab: TabType = 'frontend'

  constructor() {
    makeAutoObservable(this)
  }

  setActiveTab = (tab: TabType) => {
    this.activeTab = tab
  }
}

export const skillsStore = new SkillsStore()
