import React, { Fragment, useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import { Tab, Select } from '@alicloud/console-components';
import { getVersion, getAlias } from '../../../request/index';
import './index.css';

let getTimeConfigFlag = false; // 是否获取数据
interface ForwardRefProperty{
  getTimeConfig: () => void;
  ref: React.Ref<any>;
}
export default forwardRef((props: ForwardRefProperty, ref) => {
  const [qualifier, setQualifier] = useState({ lable: 'LATEST', value: 'LATEST' });
  const [visible, setVisible] = useState(false);
  const [listVersions, setListVersions] = useState([]);
  const [listAlias, setListAlias] = useState([]);

  useEffect(() => {
    if (visible) {
      getQualifier();
    }
    if (getTimeConfigFlag) {
      props.getTimeConfig();
      getTimeConfigFlag = false;
    }
  }, [visible]);

  // 获取版本别名列表
  async function getQualifier() {
    const versions = await getVersion();
    versions.unshift({ versionId: 'LATEST' });
    setListVersions(versions);

    const aliases = await getAlias();
    setListAlias(aliases);
  }

  function selectChange(qualifierValue) {
    setQualifier({ lable: qualifierValue, value: qualifierValue });
    setVisible(false);
    getTimeConfigFlag = true;
  }

  useImperativeHandle(ref, () => ({ qualifier: qualifier.value }));

  return (
    <Fragment>
      <Select
        label="版本/别名"
        value={qualifier}
        visible={visible}
        onVisibleChange={setVisible}
        style={{ width: 200}}
        className="marginLeft"
        popupContent={(
          <Tab
            className="qualifier-dropdownTab"
            size="small"
          >
            <Tab.Item key="version" title={<span>版本</span>}>
              <div className="dropdownTabItem">
                {listVersions.map(({ versionId }) => <p key={versionId} onClick={() => selectChange(versionId)}>{versionId}</p>)}
              </div>
            </Tab.Item>
            <Tab.Item key="alias" title={<span>别名</span>}>
              <div className="dropdownTabItem">
                {listAlias.map(({ aliasName }) => <p key={aliasName} title={aliasName} onClick={() => selectChange(aliasName)}>{aliasName}</p>)}
              </div>
            </Tab.Item>
          </Tab>
        )}
      />
    </Fragment>
  );
});
