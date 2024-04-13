export function sendJSONResponse(res, statusCode, data, code, message) {
    let statusType = "error";
    let msgOrErr = "message";
    let messageOrError;
    if (statusCode >= 200 && statusCode < 300) {
      statusType = "success";
      msgOrErr = "message";
      messageOrError = message;
    } else if (statusCode >= 300 && statusCode < 423) {
      statusType = "warning";
      msgOrErr = "warning";
      messageOrError = message;
    } else if (statusCode >= 500 && statusCode < 503) {
      msgOrErr = "error";
      let str = message.split("\n")[1];
      const errLine = str.substring(str.length - 1, str.lastIndexOf("/") + 1);
      messageOrError = message.split("\n")[0] + " at " + errLine;
    }
  
    res.status(statusCode).json({
      status: statusType,
      data: data || null,
      code: code,
      [msgOrErr]: messageOrError,
    });
  }