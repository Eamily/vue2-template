module.exports = {
  disableEmoji: true,
  format: "{type}{scope}: {subject}",
  list: [
    "test",
    "feat",
    "fix",
    "chore",
    "docs",
    "refactor",
    "style",
    "ci",
    "pref",
    "build",
    "revert",
    "merge",
    "release",
    "workflow",
  ],
  maxMessageLength: 64,
  minMessageLength: 1,
  questions: ["type", "scope", "subject", "body", "breaking", "issue"],
  scopes: [],
  types: {
    test: {
      value: "test",
      description: "新增测试用例或是更新现有测试",
    },
    feat: {
      value: "feat",
      description: "新增功能",
    },
    fix: {
      value: "fix",
      description: "bug修复",
    },
    chore: {
      value: "chore",
      description: "不属于以上类型的其他类，比如构建流程，依赖管理",
    },
    docs: {
      value: "docs",
      description: "文档更新、文档修改",
    },
    refactor: {
      value: "refactor",
      description: "重构代码（既没有新增功能，也没有修复bug，在不影响代码内部行为、功能下的代码修改）",
    },
    style: {
      value: "style",
      description: "不影响程序逻辑的代码修改（修改空白字符、格式缩进、补全缺失的分号等，没有改变代码逻辑，注意不是css修改！）",
    },
    ci: {
      value: "ci",
      description: "主要目的是修改项目继续集成流程（例如Travis、Jenkins、GitLab Cl、circle等）的提交（持续集成相关文件修改）",
    },
    pref: {
      value: "pref",
      description: "性能、体验优化（更改代码，以提高性能）",
    },
    build: {
      value: "build",
      description: "主要目的是修改项目构建系统（例如glup、webpack、rollup的配置等）的提交（影响项目构建或依赖项修改）",
    },
    revert: {
      value: "revert",
      description: "回滚某个更早之前的提交（恢复上一次提交）",
    },
    merge: {
      value: "merge",
      description: "合并分支，解决冲突",
    },
    release: {
      value: "release",
      description: "发布新版本",
    },
    workflow: {
      value: "workflow",
      description: "工作流相关文件修改",
    },
  },
};