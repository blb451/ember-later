const setupEngineRenderingTest = {
  create: (context) => ({
    ExpressionStatement(node) {
      const engineTestPath = '/tests/engines/';
      const filePath = context.getFilename()

      if (!filePath.includes(engineTestPath)) {
        return;
      }

      if (node?.expression?.callee?.name === 'setupEngineRenderingTest') {
        return;
      }

      if (node?.expression?.callee?.name === 'setupRenderingTest') {
        context.report({
          node,
          message: "Engine tests must use 'setupEngineRenderingTest' instead of 'setupRenderingTest'"
        });
      }
    }
  })
}

module.exports = {
  rules: {
    'setup-engine-rendering-test': setupEngineRenderingTest
  }
};
